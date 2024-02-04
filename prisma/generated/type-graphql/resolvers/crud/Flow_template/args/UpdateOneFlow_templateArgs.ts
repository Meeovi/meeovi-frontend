import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Flow_templateUpdateInput } from "../../../inputs/Flow_templateUpdateInput";
import { Flow_templateWhereUniqueInput } from "../../../inputs/Flow_templateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneFlow_templateArgs {
  @TypeGraphQL.Field(_type => Flow_templateUpdateInput, {
    nullable: false
  })
  data!: Flow_templateUpdateInput;

  @TypeGraphQL.Field(_type => Flow_templateWhereUniqueInput, {
    nullable: false
  })
  where!: Flow_templateWhereUniqueInput;
}
