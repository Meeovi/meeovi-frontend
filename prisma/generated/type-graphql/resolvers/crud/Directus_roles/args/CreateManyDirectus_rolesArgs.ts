import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_rolesCreateManyInput } from "../../../inputs/Directus_rolesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDirectus_rolesArgs {
  @TypeGraphQL.Field(_type => [Directus_rolesCreateManyInput], {
    nullable: false
  })
  data!: Directus_rolesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
