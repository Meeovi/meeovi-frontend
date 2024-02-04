import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_entityUpdateInput } from "../../../inputs/Custom_entityUpdateInput";
import { Custom_entityWhereUniqueInput } from "../../../inputs/Custom_entityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCustom_entityArgs {
  @TypeGraphQL.Field(_type => Custom_entityUpdateInput, {
    nullable: false
  })
  data!: Custom_entityUpdateInput;

  @TypeGraphQL.Field(_type => Custom_entityWhereUniqueInput, {
    nullable: false
  })
  where!: Custom_entityWhereUniqueInput;
}
