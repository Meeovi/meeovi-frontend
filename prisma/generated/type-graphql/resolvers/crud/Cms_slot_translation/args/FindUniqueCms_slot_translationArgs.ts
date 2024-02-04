import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_slot_translationWhereUniqueInput } from "../../../inputs/Cms_slot_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCms_slot_translationArgs {
  @TypeGraphQL.Field(_type => Cms_slot_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_slot_translationWhereUniqueInput;
}
