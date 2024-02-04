import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_page_translationCreateManyInput } from "../../../inputs/Landing_page_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLanding_page_translationArgs {
  @TypeGraphQL.Field(_type => [Landing_page_translationCreateManyInput], {
    nullable: false
  })
  data!: Landing_page_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
