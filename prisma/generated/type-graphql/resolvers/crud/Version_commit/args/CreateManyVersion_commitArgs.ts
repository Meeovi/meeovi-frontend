import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Version_commitCreateManyInput } from "../../../inputs/Version_commitCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyVersion_commitArgs {
  @TypeGraphQL.Field(_type => [Version_commitCreateManyInput], {
    nullable: false
  })
  data!: Version_commitCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
