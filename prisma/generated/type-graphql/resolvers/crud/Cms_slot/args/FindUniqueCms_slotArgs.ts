import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_slotWhereUniqueInput } from "../../../inputs/Cms_slotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCms_slotArgs {
  @TypeGraphQL.Field(_type => Cms_slotWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_slotWhereUniqueInput;
}
