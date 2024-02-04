import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncrementCreateInput } from "../../../inputs/IncrementCreateInput";
import { IncrementUpdateInput } from "../../../inputs/IncrementUpdateInput";
import { IncrementWhereUniqueInput } from "../../../inputs/IncrementWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneIncrementArgs {
  @TypeGraphQL.Field(_type => IncrementWhereUniqueInput, {
    nullable: false
  })
  where!: IncrementWhereUniqueInput;

  @TypeGraphQL.Field(_type => IncrementCreateInput, {
    nullable: false
  })
  create!: IncrementCreateInput;

  @TypeGraphQL.Field(_type => IncrementUpdateInput, {
    nullable: false
  })
  update!: IncrementUpdateInput;
}
