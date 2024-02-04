import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_pageCreateManyInput } from "../../../inputs/Landing_pageCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLanding_pageArgs {
  @TypeGraphQL.Field(_type => [Landing_pageCreateManyInput], {
    nullable: false
  })
  data!: Landing_pageCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
