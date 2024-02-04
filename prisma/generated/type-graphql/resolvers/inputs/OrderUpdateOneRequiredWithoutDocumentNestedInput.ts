import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateOrConnectWithoutDocumentInput } from "../inputs/OrderCreateOrConnectWithoutDocumentInput";
import { OrderCreateWithoutDocumentInput } from "../inputs/OrderCreateWithoutDocumentInput";
import { OrderUpdateToOneWithWhereWithoutDocumentInput } from "../inputs/OrderUpdateToOneWithWhereWithoutDocumentInput";
import { OrderUpsertWithoutDocumentInput } from "../inputs/OrderUpsertWithoutDocumentInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateOneRequiredWithoutDocumentNestedInput", {})
export class OrderUpdateOneRequiredWithoutDocumentNestedInput {
  @TypeGraphQL.Field(_type => OrderCreateWithoutDocumentInput, {
    nullable: true
  })
  create?: OrderCreateWithoutDocumentInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutDocumentInput, {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutDocumentInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpsertWithoutDocumentInput, {
    nullable: true
  })
  upsert?: OrderUpsertWithoutDocumentInput | undefined;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true
  })
  connect?: OrderWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateToOneWithWhereWithoutDocumentInput, {
    nullable: true
  })
  update?: OrderUpdateToOneWithWhereWithoutDocumentInput | undefined;
}
