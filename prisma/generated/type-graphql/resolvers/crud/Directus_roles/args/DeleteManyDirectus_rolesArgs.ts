import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_rolesWhereInput } from "../../../inputs/Directus_rolesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDirectus_rolesArgs {
  @TypeGraphQL.Field(_type => Directus_rolesWhereInput, {
    nullable: true
  })
  where?: Directus_rolesWhereInput | undefined;
}
