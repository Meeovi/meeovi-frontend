import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_slot_translationWhereInput } from "../../../inputs/Cms_slot_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCms_slot_translationArgs {
  @TypeGraphQL.Field(_type => Cms_slot_translationWhereInput, {
    nullable: true
  })
  where?: Cms_slot_translationWhereInput | undefined;
}
