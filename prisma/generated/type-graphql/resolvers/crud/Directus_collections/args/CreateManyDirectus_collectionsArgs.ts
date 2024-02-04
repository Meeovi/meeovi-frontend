import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_collectionsCreateManyInput } from "../../../inputs/Directus_collectionsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDirectus_collectionsArgs {
  @TypeGraphQL.Field(_type => [Directus_collectionsCreateManyInput], {
    nullable: false
  })
  data!: Directus_collectionsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
