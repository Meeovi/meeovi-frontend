import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_typeCreateOrConnectWithoutDocument_base_configInput } from "../inputs/Document_typeCreateOrConnectWithoutDocument_base_configInput";
import { Document_typeCreateWithoutDocument_base_configInput } from "../inputs/Document_typeCreateWithoutDocument_base_configInput";
import { Document_typeUpdateToOneWithWhereWithoutDocument_base_configInput } from "../inputs/Document_typeUpdateToOneWithWhereWithoutDocument_base_configInput";
import { Document_typeUpsertWithoutDocument_base_configInput } from "../inputs/Document_typeUpsertWithoutDocument_base_configInput";
import { Document_typeWhereUniqueInput } from "../inputs/Document_typeWhereUniqueInput";

@TypeGraphQL.InputType("Document_typeUpdateOneRequiredWithoutDocument_base_configNestedInput", {})
export class Document_typeUpdateOneRequiredWithoutDocument_base_configNestedInput {
  @TypeGraphQL.Field(_type => Document_typeCreateWithoutDocument_base_configInput, {
    nullable: true
  })
  create?: Document_typeCreateWithoutDocument_base_configInput | undefined;

  @TypeGraphQL.Field(_type => Document_typeCreateOrConnectWithoutDocument_base_configInput, {
    nullable: true
  })
  connectOrCreate?: Document_typeCreateOrConnectWithoutDocument_base_configInput | undefined;

  @TypeGraphQL.Field(_type => Document_typeUpsertWithoutDocument_base_configInput, {
    nullable: true
  })
  upsert?: Document_typeUpsertWithoutDocument_base_configInput | undefined;

  @TypeGraphQL.Field(_type => Document_typeWhereUniqueInput, {
    nullable: true
  })
  connect?: Document_typeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Document_typeUpdateToOneWithWhereWithoutDocument_base_configInput, {
    nullable: true
  })
  update?: Document_typeUpdateToOneWithWhereWithoutDocument_base_configInput | undefined;
}
