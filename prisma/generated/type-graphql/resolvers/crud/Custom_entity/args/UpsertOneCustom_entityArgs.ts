import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_entityCreateInput } from "../../../inputs/Custom_entityCreateInput";
import { Custom_entityUpdateInput } from "../../../inputs/Custom_entityUpdateInput";
import { Custom_entityWhereUniqueInput } from "../../../inputs/Custom_entityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCustom_entityArgs {
  @TypeGraphQL.Field(_type => Custom_entityWhereUniqueInput, {
    nullable: false
  })
  where!: Custom_entityWhereUniqueInput;

  @TypeGraphQL.Field(_type => Custom_entityCreateInput, {
    nullable: false
  })
  create!: Custom_entityCreateInput;

  @TypeGraphQL.Field(_type => Custom_entityUpdateInput, {
    nullable: false
  })
  update!: Custom_entityUpdateInput;
}
