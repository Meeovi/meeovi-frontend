import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_entityCreateInput } from "../../../inputs/Custom_entityCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCustom_entityArgs {
  @TypeGraphQL.Field(_type => Custom_entityCreateInput, {
    nullable: false
  })
  data!: Custom_entityCreateInput;
}
