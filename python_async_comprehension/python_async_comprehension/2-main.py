#!/usr/bin/env python3
"""Main module to execute and display the runtime measurement
of four parallel async comprehensions."""

import asyncio

measure_runtime = __import__('2-measure_runtime').measure_runtime


async def main() -> float:
    """Runs the measure_runtime coroutine and returns the total runtime."""
    return await measure_runtime()


if __name__ == "__main__":
    """Executes the main coroutine using asyncio.run
    and prints the measured runtime."""
    print(asyncio.run(main()))
