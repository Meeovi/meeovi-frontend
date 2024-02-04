import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_slotUpdateManyMutationInput } from "../../../inputs/Cms_slotUpdateManyMutationInput";
import { Cms_slotWhereInput } from "../../../inputs/Cms_slotWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCms_slotArgs {
  @TypeGraphQL.Field(_type => Cms_slotUpdateManyMutationInput, {
    nullable: false
  })
  data!: Cms_slotUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Cms_slotWhereInput, {
    nullable: true
  })
  where?: Cms_slotWhereInput | undefined;
}
