import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncrementUpdateInput } from "../../../inputs/IncrementUpdateInput";
import { IncrementWhereUniqueInput } from "../../../inputs/IncrementWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneIncrementArgs {
  @TypeGraphQL.Field(_type => IncrementUpdateInput, {
    nullable: false
  })
  data!: IncrementUpdateInput;

  @TypeGraphQL.Field(_type => IncrementWhereUniqueInput, {
    nullable: false
  })
  where!: IncrementWhereUniqueInput;
}
