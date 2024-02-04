import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_header_footerCreateManyInput } from "../../../inputs/Mail_header_footerCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMail_header_footerArgs {
  @TypeGraphQL.Field(_type => [Mail_header_footerCreateManyInput], {
    nullable: false
  })
  data!: Mail_header_footerCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
