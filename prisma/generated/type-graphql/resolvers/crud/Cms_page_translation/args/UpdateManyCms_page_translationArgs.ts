import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_page_translationUpdateManyMutationInput } from "../../../inputs/Cms_page_translationUpdateManyMutationInput";
import { Cms_page_translationWhereInput } from "../../../inputs/Cms_page_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCms_page_translationArgs {
  @TypeGraphQL.Field(_type => Cms_page_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Cms_page_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Cms_page_translationWhereInput, {
    nullable: true
  })
  where?: Cms_page_translationWhereInput | undefined;
}
