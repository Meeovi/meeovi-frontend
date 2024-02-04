import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_flowsCreateInput } from "../../../inputs/Directus_flowsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDirectus_flowsArgs {
  @TypeGraphQL.Field(_type => Directus_flowsCreateInput, {
    nullable: false
  })
  data!: Directus_flowsCreateInput;
}
