import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncrementCreateManyInput } from "../../../inputs/IncrementCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyIncrementArgs {
  @TypeGraphQL.Field(_type => [IncrementCreateManyInput], {
    nullable: false
  })
  data!: IncrementCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
