import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutPromotion_persona_customerInput } from "../inputs/CustomerCreateOrConnectWithoutPromotion_persona_customerInput";
import { CustomerCreateWithoutPromotion_persona_customerInput } from "../inputs/CustomerCreateWithoutPromotion_persona_customerInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateNestedOneWithoutPromotion_persona_customerInput", {})
export class CustomerCreateNestedOneWithoutPromotion_persona_customerInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutPromotion_persona_customerInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutPromotion_persona_customerInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutPromotion_persona_customerInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutPromotion_persona_customerInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;
}
