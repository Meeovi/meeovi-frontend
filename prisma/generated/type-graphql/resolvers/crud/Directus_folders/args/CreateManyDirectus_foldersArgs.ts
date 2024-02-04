import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_foldersCreateManyInput } from "../../../inputs/Directus_foldersCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDirectus_foldersArgs {
  @TypeGraphQL.Field(_type => [Directus_foldersCreateManyInput], {
    nullable: false
  })
  data!: Directus_foldersCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
