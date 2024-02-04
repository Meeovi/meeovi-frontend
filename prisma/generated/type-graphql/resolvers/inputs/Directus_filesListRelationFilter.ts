import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_filesWhereInput } from "../inputs/Directus_filesWhereInput";

@TypeGraphQL.InputType("Directus_filesListRelationFilter", {})
export class Directus_filesListRelationFilter {
  @TypeGraphQL.Field(_type => Directus_filesWhereInput, {
    nullable: true
  })
  every?: Directus_filesWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_filesWhereInput, {
    nullable: true
  })
  some?: Directus_filesWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_filesWhereInput, {
    nullable: true
  })
  none?: Directus_filesWhereInput | undefined;
}
