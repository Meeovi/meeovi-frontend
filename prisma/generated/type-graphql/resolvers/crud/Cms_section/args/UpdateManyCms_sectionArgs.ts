import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_sectionUpdateManyMutationInput } from "../../../inputs/Cms_sectionUpdateManyMutationInput";
import { Cms_sectionWhereInput } from "../../../inputs/Cms_sectionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCms_sectionArgs {
  @TypeGraphQL.Field(_type => Cms_sectionUpdateManyMutationInput, {
    nullable: false
  })
  data!: Cms_sectionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Cms_sectionWhereInput, {
    nullable: true
  })
  where?: Cms_sectionWhereInput | undefined;
}
