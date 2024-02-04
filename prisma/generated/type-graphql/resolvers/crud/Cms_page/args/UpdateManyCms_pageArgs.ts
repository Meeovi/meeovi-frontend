import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_pageUpdateManyMutationInput } from "../../../inputs/Cms_pageUpdateManyMutationInput";
import { Cms_pageWhereInput } from "../../../inputs/Cms_pageWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCms_pageArgs {
  @TypeGraphQL.Field(_type => Cms_pageUpdateManyMutationInput, {
    nullable: false
  })
  data!: Cms_pageUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Cms_pageWhereInput, {
    nullable: true
  })
  where?: Cms_pageWhereInput | undefined;
}
