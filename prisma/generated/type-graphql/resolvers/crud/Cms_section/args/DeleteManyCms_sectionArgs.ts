import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_sectionWhereInput } from "../../../inputs/Cms_sectionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCms_sectionArgs {
  @TypeGraphQL.Field(_type => Cms_sectionWhereInput, {
    nullable: true
  })
  where?: Cms_sectionWhereInput | undefined;
}
