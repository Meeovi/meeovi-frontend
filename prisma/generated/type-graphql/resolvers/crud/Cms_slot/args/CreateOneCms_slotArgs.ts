import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_slotCreateInput } from "../../../inputs/Cms_slotCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCms_slotArgs {
  @TypeGraphQL.Field(_type => Cms_slotCreateInput, {
    nullable: false
  })
  data!: Cms_slotCreateInput;
}
