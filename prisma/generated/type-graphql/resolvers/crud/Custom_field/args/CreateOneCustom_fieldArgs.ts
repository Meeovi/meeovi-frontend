import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_fieldCreateInput } from "../../../inputs/Custom_fieldCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCustom_fieldArgs {
  @TypeGraphQL.Field(_type => Custom_fieldCreateInput, {
    nullable: false
  })
  data!: Custom_fieldCreateInput;
}
