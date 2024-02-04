import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_flowsCreateManyDirectus_usersInputEnvelope } from "../inputs/Directus_flowsCreateManyDirectus_usersInputEnvelope";
import { Directus_flowsCreateOrConnectWithoutDirectus_usersInput } from "../inputs/Directus_flowsCreateOrConnectWithoutDirectus_usersInput";
import { Directus_flowsCreateWithoutDirectus_usersInput } from "../inputs/Directus_flowsCreateWithoutDirectus_usersInput";
import { Directus_flowsWhereUniqueInput } from "../inputs/Directus_flowsWhereUniqueInput";

@TypeGraphQL.InputType("Directus_flowsCreateNestedManyWithoutDirectus_usersInput", {})
export class Directus_flowsCreateNestedManyWithoutDirectus_usersInput {
  @TypeGraphQL.Field(_type => [Directus_flowsCreateWithoutDirectus_usersInput], {
    nullable: true
  })
  create?: Directus_flowsCreateWithoutDirectus_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_flowsCreateOrConnectWithoutDirectus_usersInput], {
    nullable: true
  })
  connectOrCreate?: Directus_flowsCreateOrConnectWithoutDirectus_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => Directus_flowsCreateManyDirectus_usersInputEnvelope, {
    nullable: true
  })
  createMany?: Directus_flowsCreateManyDirectus_usersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Directus_flowsWhereUniqueInput], {
    nullable: true
  })
  connect?: Directus_flowsWhereUniqueInput[] | undefined;
}
