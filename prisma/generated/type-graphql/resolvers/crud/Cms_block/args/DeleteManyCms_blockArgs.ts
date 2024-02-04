import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_blockWhereInput } from "../../../inputs/Cms_blockWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCms_blockArgs {
  @TypeGraphQL.Field(_type => Cms_blockWhereInput, {
    nullable: true
  })
  where?: Cms_blockWhereInput | undefined;
}
