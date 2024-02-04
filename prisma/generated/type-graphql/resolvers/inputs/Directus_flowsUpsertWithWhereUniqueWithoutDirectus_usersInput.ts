import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_flowsCreateWithoutDirectus_usersInput } from "../inputs/Directus_flowsCreateWithoutDirectus_usersInput";
import { Directus_flowsUpdateWithoutDirectus_usersInput } from "../inputs/Directus_flowsUpdateWithoutDirectus_usersInput";
import { Directus_flowsWhereUniqueInput } from "../inputs/Directus_flowsWhereUniqueInput";

@TypeGraphQL.InputType("Directus_flowsUpsertWithWhereUniqueWithoutDirectus_usersInput", {})
export class Directus_flowsUpsertWithWhereUniqueWithoutDirectus_usersInput {
  @TypeGraphQL.Field(_type => Directus_flowsWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_flowsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Directus_flowsUpdateWithoutDirectus_usersInput, {
    nullable: false
  })
  update!: Directus_flowsUpdateWithoutDirectus_usersInput;

  @TypeGraphQL.Field(_type => Directus_flowsCreateWithoutDirectus_usersInput, {
    nullable: false
  })
  create!: Directus_flowsCreateWithoutDirectus_usersInput;
}
