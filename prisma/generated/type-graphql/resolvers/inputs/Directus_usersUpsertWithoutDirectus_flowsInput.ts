import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_usersCreateWithoutDirectus_flowsInput } from "../inputs/Directus_usersCreateWithoutDirectus_flowsInput";
import { Directus_usersUpdateWithoutDirectus_flowsInput } from "../inputs/Directus_usersUpdateWithoutDirectus_flowsInput";
import { Directus_usersWhereInput } from "../inputs/Directus_usersWhereInput";

@TypeGraphQL.InputType("Directus_usersUpsertWithoutDirectus_flowsInput", {})
export class Directus_usersUpsertWithoutDirectus_flowsInput {
  @TypeGraphQL.Field(_type => Directus_usersUpdateWithoutDirectus_flowsInput, {
    nullable: false
  })
  update!: Directus_usersUpdateWithoutDirectus_flowsInput;

  @TypeGraphQL.Field(_type => Directus_usersCreateWithoutDirectus_flowsInput, {
    nullable: false
  })
  create!: Directus_usersCreateWithoutDirectus_flowsInput;

  @TypeGraphQL.Field(_type => Directus_usersWhereInput, {
    nullable: true
  })
  where?: Directus_usersWhereInput | undefined;
}
