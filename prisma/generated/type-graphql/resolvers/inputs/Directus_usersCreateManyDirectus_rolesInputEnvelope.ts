import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_usersCreateManyDirectus_rolesInput } from "../inputs/Directus_usersCreateManyDirectus_rolesInput";

@TypeGraphQL.InputType("Directus_usersCreateManyDirectus_rolesInputEnvelope", {})
export class Directus_usersCreateManyDirectus_rolesInputEnvelope {
  @TypeGraphQL.Field(_type => [Directus_usersCreateManyDirectus_rolesInput], {
    nullable: false
  })
  data!: Directus_usersCreateManyDirectus_rolesInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
