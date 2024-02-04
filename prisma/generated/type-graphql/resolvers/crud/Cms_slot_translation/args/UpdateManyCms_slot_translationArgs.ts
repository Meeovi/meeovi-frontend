import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_slot_translationUpdateManyMutationInput } from "../../../inputs/Cms_slot_translationUpdateManyMutationInput";
import { Cms_slot_translationWhereInput } from "../../../inputs/Cms_slot_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCms_slot_translationArgs {
  @TypeGraphQL.Field(_type => Cms_slot_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Cms_slot_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Cms_slot_translationWhereInput, {
    nullable: true
  })
  where?: Cms_slot_translationWhereInput | undefined;
}
