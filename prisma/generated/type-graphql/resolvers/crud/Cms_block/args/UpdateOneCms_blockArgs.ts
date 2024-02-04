import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_blockUpdateInput } from "../../../inputs/Cms_blockUpdateInput";
import { Cms_blockWhereUniqueInput } from "../../../inputs/Cms_blockWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCms_blockArgs {
  @TypeGraphQL.Field(_type => Cms_blockUpdateInput, {
    nullable: false
  })
  data!: Cms_blockUpdateInput;

  @TypeGraphQL.Field(_type => Cms_blockWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_blockWhereUniqueInput;
}
