import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Refresh_tokenCreateManyInput } from "../../../inputs/Refresh_tokenCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRefresh_tokenArgs {
  @TypeGraphQL.Field(_type => [Refresh_tokenCreateManyInput], {
    nullable: false
  })
  data!: Refresh_tokenCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
