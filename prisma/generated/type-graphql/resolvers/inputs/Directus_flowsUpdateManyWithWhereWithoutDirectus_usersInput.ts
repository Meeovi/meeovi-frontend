import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_flowsScalarWhereInput } from "../inputs/Directus_flowsScalarWhereInput";
import { Directus_flowsUpdateManyMutationInput } from "../inputs/Directus_flowsUpdateManyMutationInput";

@TypeGraphQL.InputType("Directus_flowsUpdateManyWithWhereWithoutDirectus_usersInput", {})
export class Directus_flowsUpdateManyWithWhereWithoutDirectus_usersInput {
  @TypeGraphQL.Field(_type => Directus_flowsScalarWhereInput, {
    nullable: false
  })
  where!: Directus_flowsScalarWhereInput;

  @TypeGraphQL.Field(_type => Directus_flowsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Directus_flowsUpdateManyMutationInput;
}
