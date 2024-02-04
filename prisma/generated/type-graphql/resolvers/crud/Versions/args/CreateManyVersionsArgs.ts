import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionsCreateManyInput } from "../../../inputs/VersionsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyVersionsArgs {
  @TypeGraphQL.Field(_type => [VersionsCreateManyInput], {
    nullable: false
  })
  data!: VersionsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
