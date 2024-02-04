import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_blockUpdateManyMutationInput } from "../../../inputs/Cms_blockUpdateManyMutationInput";
import { Cms_blockWhereInput } from "../../../inputs/Cms_blockWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCms_blockArgs {
  @TypeGraphQL.Field(_type => Cms_blockUpdateManyMutationInput, {
    nullable: false
  })
  data!: Cms_blockUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Cms_blockWhereInput, {
    nullable: true
  })
  where?: Cms_blockWhereInput | undefined;
}
