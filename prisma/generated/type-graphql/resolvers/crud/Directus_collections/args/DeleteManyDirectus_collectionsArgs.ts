import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_collectionsWhereInput } from "../../../inputs/Directus_collectionsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDirectus_collectionsArgs {
  @TypeGraphQL.Field(_type => Directus_collectionsWhereInput, {
    nullable: true
  })
  where?: Directus_collectionsWhereInput | undefined;
}
