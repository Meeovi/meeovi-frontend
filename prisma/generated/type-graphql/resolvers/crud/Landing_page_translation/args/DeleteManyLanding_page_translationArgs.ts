import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_page_translationWhereInput } from "../../../inputs/Landing_page_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLanding_page_translationArgs {
  @TypeGraphQL.Field(_type => Landing_page_translationWhereInput, {
    nullable: true
  })
  where?: Landing_page_translationWhereInput | undefined;
}
