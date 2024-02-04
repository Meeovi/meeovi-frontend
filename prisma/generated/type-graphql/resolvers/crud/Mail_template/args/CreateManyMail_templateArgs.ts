import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_templateCreateManyInput } from "../../../inputs/Mail_templateCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMail_templateArgs {
  @TypeGraphQL.Field(_type => [Mail_templateCreateManyInput], {
    nullable: false
  })
  data!: Mail_templateCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
