import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutPromotion_persona_customerInput } from "../inputs/CustomerCreateWithoutPromotion_persona_customerInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateOrConnectWithoutPromotion_persona_customerInput", {})
export class CustomerCreateOrConnectWithoutPromotion_persona_customerInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutPromotion_persona_customerInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutPromotion_persona_customerInput;
}
