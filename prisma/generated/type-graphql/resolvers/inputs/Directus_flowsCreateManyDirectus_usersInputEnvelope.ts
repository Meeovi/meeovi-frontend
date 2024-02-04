import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_flowsCreateManyDirectus_usersInput } from "../inputs/Directus_flowsCreateManyDirectus_usersInput";

@TypeGraphQL.InputType("Directus_flowsCreateManyDirectus_usersInputEnvelope", {})
export class Directus_flowsCreateManyDirectus_usersInputEnvelope {
  @TypeGraphQL.Field(_type => [Directus_flowsCreateManyDirectus_usersInput], {
    nullable: false
  })
  data!: Directus_flowsCreateManyDirectus_usersInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
