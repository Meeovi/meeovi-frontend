import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AppCreateInput } from "../../../inputs/AppCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAppArgs {
  @TypeGraphQL.Field(_type => AppCreateInput, {
    nullable: false
  })
  data!: AppCreateInput;
}
