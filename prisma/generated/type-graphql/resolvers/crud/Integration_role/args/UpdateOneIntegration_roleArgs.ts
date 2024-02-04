import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Integration_roleUpdateInput } from "../../../inputs/Integration_roleUpdateInput";
import { Integration_roleWhereUniqueInput } from "../../../inputs/Integration_roleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneIntegration_roleArgs {
  @TypeGraphQL.Field(_type => Integration_roleUpdateInput, {
    nullable: false
  })
  data!: Integration_roleUpdateInput;

  @TypeGraphQL.Field(_type => Integration_roleWhereUniqueInput, {
    nullable: false
  })
  where!: Integration_roleWhereUniqueInput;
}
