import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_filesWhereInput } from "../../../inputs/Directus_filesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDirectus_filesArgs {
  @TypeGraphQL.Field(_type => Directus_filesWhereInput, {
    nullable: true
  })
  where?: Directus_filesWhereInput | undefined;
}
