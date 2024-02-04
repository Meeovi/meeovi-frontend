import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_typeCreateWithoutDocument_base_configInput } from "../inputs/Document_typeCreateWithoutDocument_base_configInput";
import { Document_typeUpdateWithoutDocument_base_configInput } from "../inputs/Document_typeUpdateWithoutDocument_base_configInput";
import { Document_typeWhereInput } from "../inputs/Document_typeWhereInput";

@TypeGraphQL.InputType("Document_typeUpsertWithoutDocument_base_configInput", {})
export class Document_typeUpsertWithoutDocument_base_configInput {
  @TypeGraphQL.Field(_type => Document_typeUpdateWithoutDocument_base_configInput, {
    nullable: false
  })
  update!: Document_typeUpdateWithoutDocument_base_configInput;

  @TypeGraphQL.Field(_type => Document_typeCreateWithoutDocument_base_configInput, {
    nullable: false
  })
  create!: Document_typeCreateWithoutDocument_base_configInput;

  @TypeGraphQL.Field(_type => Document_typeWhereInput, {
    nullable: true
  })
  where?: Document_typeWhereInput | undefined;
}
