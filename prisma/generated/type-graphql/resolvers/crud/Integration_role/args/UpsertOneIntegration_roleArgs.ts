import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Integration_roleCreateInput } from "../../../inputs/Integration_roleCreateInput";
import { Integration_roleUpdateInput } from "../../../inputs/Integration_roleUpdateInput";
import { Integration_roleWhereUniqueInput } from "../../../inputs/Integration_roleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneIntegration_roleArgs {
  @TypeGraphQL.Field(_type => Integration_roleWhereUniqueInput, {
    nullable: false
  })
  where!: Integration_roleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Integration_roleCreateInput, {
    nullable: false
  })
  create!: Integration_roleCreateInput;

  @TypeGraphQL.Field(_type => Integration_roleUpdateInput, {
    nullable: false
  })
  update!: Integration_roleUpdateInput;
}
